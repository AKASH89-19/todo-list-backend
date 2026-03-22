const express=require("express")
const app = express()
let todo = [];
let id=["1","2","3","4","5"];
app.delete('/:id',function(req, res) {
const target=req.params.id
if(target==="1")
{
     todo.splice(0,1)
  return res.json({
       todo
  })
} 
if(target==="2")
{
     todo.splice(1,2)
  return res.json({
     todo
  })
} 
if(target==="3")
{
     todo.splice(2,3)
  return res.json({
     todo
  })
} 
if(target==="4")
{
     todo.splice(3,4)
  return res.json({
     todo
  })
} 
if(target==="5")
{
     todo.splice(4,5)
  return res.json({
     todo
  })
} 
res.status(404).json({
  message :"ID not found"
})
}
)
  
app.post('/:id', function(req, res)  {
   const target=req.params.id
   if(target==="3")
   {
    todo.push(
      "eat the food"
    )
     return res.json({
       todo
   })
   }
    if(target==="4")
   {
    todo.push(
      "eat the foorrrd"
    )
          return res.json({
    todo
   })
   }
    if(target==="5")
   {
    todo.push(
      "eat the fooasdsadd"
    )
          return res.json({
    todo
   })
   }
   if(target==="1")
   {
    todo.push(
      "go to gym"
    )
     return res.json({
       todo
   })
   }
   if(target==="2")
   {
    todo.push(
     "drink protien shake "    
)
     return res.json({
       todo
   })
   }
   res.status(404).json({
  message :"ID not found"
})

})

app.get('/', function(req, res)  {
res.json(
  todo
)
})


app.listen(3000);

