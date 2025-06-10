const homeController = {
    getLoginPage: (req, res) => {
        res.render('login');
    },
    getCreatePage: (req, res) => {
        res.render('createAccount');
    },
    getGestionPage: (req, res) => {
        res.render('gestion');
    },
    getAdminPage: (req, res) => {
        res.render('admin');
    }
};

// <h1>Listado de productos</h1>
// <ul>
//     <% products.forEach(p=> { %>
//         <li>
//             <%=p%>
//         </li>
//         <% }) %>
// </ul>


module.exports = homeController;