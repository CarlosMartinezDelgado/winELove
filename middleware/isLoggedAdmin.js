module.exports = (req, res, next) => {
  // checks if the user is logged in when trying to access a specific page
  if( req.session.user.role === 'admin'){
    next();
  }else{
    res.redirect ("/main")
  }
};



// const isLoggedAdmin = ((req,res,next) => {
//   if( req.session.user.role === 'admin'){
//     next();
//   }else{
//     res.redirect ("/main")
//   }
// })

// module.exports = isLoggedAdmin