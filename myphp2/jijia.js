/**
 * Created by Administrator on 19-11-12.
 */

$(function(){
            $.ajax({
               type:'GET',
               url:'getapi.php',
               data:{
                    method:'query'
               },
               dataType:'json',

                success:function(data){
                    var html = '';
                    for (var i=0;i<data.length;i++){
                        html = html + '<tr>';
                        html = html + '<td width="150"><div class="input-group"><span class="input-group-addon"><input type="checkbox" ></span> <input type="text" class="form-control" name="nu" value="1"> </div></td>';
                        html = html + '<td name="name">'+ data[i].name +'</td>';
                        html = html + '<td name="price">'+ data[i].price +'</td>';
                        html = html + '</tr>';
                    }

                    $('#food').append(html);

                }
            });


                $("#jijia").click(function(){
                    var date = new Date();
                    var yue = date.getMonth() + 1
                    var riqi = date.getFullYear() +'年'+ yue +'月' + date.getDate() +'日'+ date.getHours() +'时'+ date.getMinutes() +'分'+date.getSeconds()+'秒';
                    var jiesuan = '<thead><th>名字</th> <th>数量</th> <th>总价</th> </thead>';
                    var heji = 0;
                    var check=$("input:checked");
                    check.each(function() {
                        var row = $(this).parents('tr');
                        var nu = row.find("[name='nu']").val();
                        var name = row.find("[name='name']").html();
                        var price = row.find("[name='price']").html();
                        var dheji = nu * price;
                        heji = dheji + heji;
                        jiesuan = jiesuan + '<tr>';
                        jiesuan = jiesuan + '<td>' + name + '</td>';
                        jiesuan = jiesuan + '<td>' + nu + '</td>';
                        jiesuan = jiesuan + '<td>' + dheji + '</td>';
                        jiesuan = jiesuan + '</tr>';
                    });

                    jiesuan = jiesuan + '<tr><td></td><td></td><td>' + heji + '</td></tr>';
                    jiesuan = jiesuan + '<tr><td>' + riqi + '</td><td></td><td></td></tr>';

                    $('#jj').html(jiesuan);



                });



        });

