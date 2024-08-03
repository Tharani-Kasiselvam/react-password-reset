# Password Reset Flow

***Introduction:***
&emsp;- Designed a "Forget Password?" page in the root path, where the user enters his Email Id.  
&emsp;- The captured Email Id will be validated in DB whether it is a registered email or not .   
&emsp;- If the user is not present, an error msg is thrown to enter valid email addres.   
&emsp;- If the user is present in DB, a random token string is generated and shared to the corresponding Email account.   
&emsp;- The generated Token string is stored in the DB table.   
&emsp;- When the user enter the link, it retrieves the random string and compares with DB token string. If both matches it will be routed to Account Recovery page to enter new password, else error msg will be thrown.   
&emsp;- Stores the new password in DB and revokes the entry created with random string.   

***Functionality:***
&emsp;1. *Axios POST* operation performed to generate/publish token string and to store the new password into DB.   
&emsp;2. *React Router DOM Provider* is used to route within pages.   
&emsp;3. Toast from *React-Toastify* is used to pop-up messages on screen using the ToastContainer.    
&emsp;4. *useParam()* Hook is used to handle the param retrieved from entrypoint.   
&emsp;5. *useNavigate()* param is used to handle the routing from one component to another component.   

**Author : Tharani K**