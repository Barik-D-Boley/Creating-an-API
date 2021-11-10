const express = require('express')
const app = express()
const { menu } = require('./data')

// Homepage
app.get('/', (req, res) => {
    res.send(`
        <h1>Home Page</h1>
        <ul>
            <li><a target='_blank' href='/api/menu' >Full Menu</a></li>
            <li><a target='_blank' href='/api/menu/breakfast'>Breakfast Menu</a></li>
            <li><a target='_blank' href='/api/menu/lunch'>Lunch Menu</a></li>
            <li><a target='_blank' href='/api/menu/dinner'>Dinner Menu</a></li>
            <li><a target='_blank' href='/api/menu/starters'>Starter Menu</a></li>
            <li><a target='_blank' href='/api/menu/sides'>Sides Menu</a></li>
            <li><a target='_blank' href='/api/menu/desserts'>Dessert Menu</a></li>
            <li><a target='_blank' href='/api/menu/beverages'>Beverage Menu</a></li>
            <li><a target='_blank' href='/api/menu/toGoFave'>To go Favorites Menu</a></li>
            <li><a target='_blank' href='/api/menu/glutenFree'>Gluten Free Menu</a></li>
            <li><a target='_blank' href='/api/menu/69'>Specific Menu Item</a></li>
            <li><a target='_blank' href='/api/menu/v1/query?search=bacon&maxPrice=10&minCal=800&limit=2'>Query Search</a></li>
        </ul>
    `)
})

// All menu items
app.get('/api/menu', (req, res) => {
    const newProducts = menu.map((item) => {
        const { id, toGoFave, glutenFree, category, name, price, calories, description} = item
        return { id, toGoFave, glutenFree, category, name, price, calories, description}
    })

    res.json(newProducts);  
})

// All breakfast items
app.get('/api/menu/breakfast', (req, res) => {
    let items = menu.filter(item => item.category == 'Breakfast');
    const newProducts = items.map((item) => {
        const { id, toGoFave, glutenFree, category, name, price, calories, description } = item
        return { id, toGoFave, glutenFree, category, name, price, calories, description }
    })

    res.json(newProducts);  
})

// All lunch items
app.get('/api/menu/lunch', (req, res) => {
    let items = menu.filter(item => item.category == 'Lunch');
    const newProducts = items.map((item) => {
        const { id, toGoFave, glutenFree, category, name, price, calories, description } = item
        return { id, toGoFave, glutenFree, category, name, price, calories, description }
    })

    res.json(newProducts);  
})

// All dinner items
app.get('/api/menu/dinner', (req, res) => {
    let items = menu.filter(item => item.category == 'Dinner');
    const newProducts = items.map((item) => {
        const { id, toGoFave, glutenFree, category, name, price, calories, description } = item
        return { id, toGoFave, glutenFree, category, name, price, calories, description }
    })

    res.json(newProducts);  
})

// All starters
app.get('/api/menu/starters', (req, res) => {
    let items = menu.filter(item => item.category == 'Starter');
    const newProducts = items.map((item) => {
        const { id, toGoFave, glutenFree, category, name, price, calories, description } = item
        return { id, toGoFave, glutenFree, category, name, price, calories, description }
    })

    res.json(newProducts);  
})

// All sides
app.get('/api/menu/sides', (req, res) => {
    let items = menu.filter(item => item.category == 'Side');
    const newProducts = items.map((item) => {
        const { id, toGoFave, glutenFree, category, name, price, calories, description } = item
        return { id, toGoFave, glutenFree, category, name, price, calories, description }
    })

    res.json(newProducts);  
})

// All desserts
app.get('/api/menu/desserts', (req, res) => {
    let items = menu.filter(item => item.category == 'Dessert');
    const newProducts = items.map((item) => {
        const { id, toGoFave, glutenFree, category, name, price, calories, description } = item
        return { id, toGoFave, glutenFree, category, name, price, calories, description }
    })

    res.json(newProducts);  
})

// All beverages
app.get('/api/menu/beverages', (req, res) => {
    let items = menu.filter(item => item.category == 'Beverage');
    const newProducts = items.map((item) => {
        const { id, toGoFave, glutenFree, category, name, price, calories, description } = item
        return { id, toGoFave, glutenFree, category, name, price, calories, description }
    })

    res.json(newProducts);  
})

// All To go Fave items
app.get('/api/menu/toGoFave', (req, res) => {
    let items = menu.filter(item => item.toGoFave === true);
    const newProducts = items.map((item) => {
        const { id, toGoFave, glutenFree, category, name, price, calories, description } = item
        return { id, toGoFave, glutenFree, category, name, price, calories, description }
    })

    res.json(newProducts);  
})

// All gluten free items
app.get('/api/menu/glutenFree', (req, res) => {
    let items = menu.filter(item => item.glutenFree === true);
    const newProducts = items.map((item) => {
        const { id, toGoFave, glutenFree, category, name, price, calories, description } = item
        return { id, toGoFave, glutenFree, category, name, price, calories, description }
    })

    res.json(newProducts);  
})

// Searches menu by item id
app.get('/api/menu/:menuID', (req, res) => {
    const { menuID } = req.params

    const singleProduct = menu.find(
        (product) => product.id === Number(menuID)
    )
    if (!singleProduct) {
        return res.status(404).send('Product does not Exist')
    }

    return res.json(singleProduct)
})

// Query search for different parameters
app.get('/api/menu/v1/query', (req, res) => {
    const { search, limit, minCal, maxCal, minPrice, maxPrice } = req.query
    let sortedMenu = [...menu]

    // Returns if the search word is in the name or the description of the item
    if (search) {
        sortedMenu = sortedMenu.filter((item) => {
            if (item.name.toLowerCase().includes(search)) {
                return item.name.toLowerCase().includes(search);
            } else if (item.description.toLowerCase().includes(search)) {
                return item.description.toLowerCase().includes(search);
            }
        })
    }
    // Returns if the calorie count is at least the minCal
    if (minCal) {
        sortedMenu = sortedMenu.filter((item) => {
            return item.calories[0] >= minCal;
        })
    }
    // Returns
    if (maxCal) {
        sortedMenu = sortedMenu.filter((item) => {
            if (item.calories.length == 1) {
                return item.calories[0] <= maxCal;
            } else {
                return item.calories[item.calories.length - 1] <= maxCal;
            }
        })
    }
    if (minPrice) {
        sortedMenu = sortedMenu.filter((item) => {
            if (!isNaN(item.price)) {
                return item.price >= minPrice;
            }
        })
    }
    if (maxPrice) {
        sortedMenu = sortedMenu.filter((item) => {
            return item.price <= maxPrice;
        })
    }
    if (limit) {
        sortedMenu = sortedMenu.slice(0, Number(limit))
    }
    if (sortedMenu.length < 1) {
        res.status(200).send('No products matched your search');
        // return res.status(200).json({ success: true, data: [] })
    }
    res.status(200).json(sortedMenu)
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000....');
})