**TECHNICAL TEST**

Development : `http://localhost:3010/inventory`

- GET     `/inventory`
- POST    `/inventory`
- PUT     `/inventory/:id`
- DELETE  `/inventory/:id`

<hr><br />

**Read Inventory**
--------------
  Returns json data of All inventories

* **URL** <br/>
  `/inventory`

* **Method:** <br/>
  `GET`
  
* **URL Params** <br/>
  None

  **Required:**
  * **Headers** <br/>
    None

  * **Data Body** <br/>
  none

* **Success Response:**
  * **Code:** 200 Ok <br />
    **Content:** 
    ```
    {
      "items": [
          {
              "id": 7,
              "imageUrl": "images\\1627629810329-111.png",
              "name": "update",
              "buyPrice": 555,
              "sellPrice": 667,
              "stock": 12,
              "createdAt": "2021-07-29T15:01:47.872Z",
              "updatedAt": "2021-07-30T07:23:30.336Z"
          }
      ]
    }
    ```

* **Error Response:**
  * **Code:** 500 SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`
<hr><br />


**Create Item**
--------------
  Returns json data of new created items

* **URL** <br/>
  `/inventory`

* **Method:** <br/>
  `POST`
  
* **URL Params** <br/>
  None

  **Required:**
  * **Headers** <br/>
    none

  * **Data Body**
  ```
    {
      "imageUrl"  : [type: file image(jpg, png)],
      "name"      : [string],
      "buyPrice"  : [integer],
      "sellPrice" : [integer],
      "stock"     : [integer],
    }
  ```

* **Success Response:**
  * **Code:** 201 Ok <br />
    **Content:** 
    ```
    {
      "item": {
          "id": 19,
          "imageUrl": "images\\1627629834393-testpic.png",
          "name": "test input item",
          "buyPrice": 1000,
          "sellPrice": 2000,
          "stock": 15,
          "updatedAt": "2021-07-30T07:23:54.411Z",
          "createdAt": "2021-07-30T07:23:54.411Z"
      }
    }
    ```

* **Error Response:**
  * **Code:** 400 Bad Request <br />
    **Content:** `{ "message": "Validation notEmpty on name failed" }` <br />
    **Content:** `{ "message": "Validation notEmpty on buyPrice failed" }` <br />
    **Content:** `{ "message": "invalid input syntax for type integer:" }` <br />
    **Content:** `{ "message": "Validation notEmpty on sellPrice failed" }` <br />
    **Content:** `{ "message": "Validation notEmpty on stock failed" }` <br />
    <br/>OR :
  * **Code:** 500 SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`
  * **Code:** 500 SERVER ERROR <br />
    **Content:** `{ error : "Image must be upload first" }`
  * **Code:** 500 SERVER ERROR <br />
    **Content:** `{ error : "name must be unique" }`
<hr><br />


**Update Item**
--------------
  Returns json data of updated item

* **URL** <br/>
  `/inventory`

* **Method:** <br/>
  `PUT`
  
* **URL Params** <br/>
  `/inventory/:id`

  **Required:**

  * **Product id** <br/>
    `id = [integer]`

  * **Headers** <br/>
    none

  * **Data Body**
  ```
    {
      "imageUrl"  : [type: file image(jpg, png)],
      "name"      : [string],
      "buyPrice"  : [integer],
      "sellPrice" : [integer],
      "stock"     : [integer],
    }
  ```

* **Success Response:**
  * **Code:** 200 Ok <br />
    **Content:** 
    ```
    {
      "updated": [
          1,
          [
              {
                  "id": 7,
                  "imageUrl": "images\\1627629810329-111.png",
                  "name": "test update items",
                  "buyPrice": 555,
                  "sellPrice": 667,
                  "stock": 12,
                  "createdAt": "2021-07-29T15:01:47.872Z",
                  "updatedAt": "2021-07-30T07:23:30.336Z"
              }
          ]
      ]
    }
    ```

* **Error Response:**
  * **Code:** 400 Bad Request <br />
    **Content:** `{ "message": "Validation notEmpty on name failed" }` <br />
    **Content:** `{ "message": "Validation notEmpty on buyPrice failed" }` <br />
    **Content:** `{ "message": "invalid input syntax for type integer:" }` <br />
    **Content:** `{ "message": "Validation notEmpty on sellPrice failed" }` <br />
    **Content:** `{ "message": "Validation notEmpty on stock failed" }` <br />
    <br/>OR :
  * **Code:** 500 SERVER ERROR <br />
    **Content:** `{ error : "Internal Server Error" }`
  * **Code:** 500 SERVER ERROR <br />
    **Content:** `{ error : "Image must be upload first" }`
  * **Code:** 500 SERVER ERROR <br />
    **Content:** `{ error : "name must be unique" }`
<hr><br /> 


**Delete Items**
--------------
  Returns json message deleted items

* **URL** <br/>
  `/inventory`

* **Method:** <br/>
  `DELETE`
  
* **URL Params** <br/>
  `/inventory/:id`

  **Required:**

  * **Product id** <br/>
    `id = [integer]`

  * **Headers** <br/>
    none

  * **Data Body** <br/>
  None

* **Success Response:**
  * **Code:** 200 Ok <br />
    **Content:** 
    ```
    {
      "message": "Item has been delete!"
    }
    ```

* **Error Response:**
  * **Code:** 404 Not Found <br />
    **Content:** `{ "message": "Data not found!" }`
<hr><br />
