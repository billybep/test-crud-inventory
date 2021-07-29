const express = require('express')
const app = express()
const router = require('./routes')
const cors = require('cors')
const port = 3010
const multer = require('multer')

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images')
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + '-' + file.originalname)
  }
})

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
    cb(null, true)
  } else cb(null, false)
}

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(multer({storage: fileStorage, fileFilter: fileFilter}).single('imageUrl'))
app.use(router)

app.use((err, req, res, next) => {
  console.log(err,'zzzz>>>>>>>>>>>>>>>>>>>>>>')
  console.log(err.name,'999999999999999999999999999999999');
  
  switch (err.name) {
    case 'SequelizeValidationError':
      res.status(400).json({ message: err.errors[0].message })
      break;  
    case 'SequelizeDatabaseError':
      res.status(500).json({ message: err.message })
      break;
    case 'SequelizeUniqueConstraintError':
      res.status(500).json({ message: 'name must be unique' })
      break;

    default: res.status(500).json({ message: err.message })
      break; 
  }
  
})

app.listen(port, _ => console.log(`App running on http://localhost:${port}`))