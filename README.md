<h2>Documentation</h2>
    <p>Using node to get data from the API</p>
    <p>This example requires node and nodemon to be downloaded to the project. Type <code class='black'>npm i node</code> and <code class='black'>npm i nodemon</code> into your IDE's terminal to download node and nodemon.</p>
    <p><strong>Ignore the dashes in the code. They are there to make the code readable.</strong></p><br>
    <div>
        <code>
            const express = require('express')
            const app = express()
            const { menu } = require('./data');
            // Change './data' to whatever the file path is to your data.js file
            // For example, if the data.js file is in a folder called 'util', type './util/data' into the require statement

            // All menu items
            app.get('/name', (req, res) => {
            ----const newProducts = menu.map((item) => {
            --------const { id, toGoFave, glutenFree, itemType, category, name, price, calories, description } = item<br>
            --------return { id, toGoFave, glutenFree, itemType, category, name, price, calories, description }<br>
            -------- // Only put items into the object that you plan on using later<br>
            <span class='indent'>----</span>})<br><br>
            
            <span class='indent'>----</span>res.json(newProducts);<br>
            })<br><br>

            app.listen(5000, () => {<br>
            <span class='indent'>----</span>console.log('Server is listening on port 5000....');<br>
            })<br>
        </code>
    </div>
