$('document').ready(()=>
    {
        //alert("helloo");
        $.ajax({
            url:"https://jsonplaceholder.typicode.com/users",
            method:"GET",
            success:(x)=>{
               $.each(x,function(i,data)
               {
                   $("table").append( '<tr>'+
                    '<td>'+data.id+'</td>'+
                    '<td>'+data.name+'</td>'+
                    '<td>'+data.username+ '</td>'+
                    '<td>'+data.email+'</td>'+
                    '<td>'+data.phone+'</td>'+
                 '</tr>')
               });

            },
            error:(e)=>{
                alert("error"+e);
            }
        })
    }
)