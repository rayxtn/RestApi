import Express from "express";
const app = Express();

app.use(Express.json());
app.get("/", (req,res)=>{
const user = req.query.user;
res.send(user);
});

const users =[];
app.post("/create_user",(req,res) => {
    const {user}= req.body;
    users.push({username:user.username,password:user.password});
    res.json({loggedIn:true,status:"success"});
}

)



app.listen(5000, ()=>{
    console.log('server started on port 5000');
})