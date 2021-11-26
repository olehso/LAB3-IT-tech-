function CreateTable()
{
    var elem = parseInt(document.getElementById('el').value); //получение правой границы диапазона 
    document.write("<h1>" + "Таблица 10х10" + "</h1>"); //вывод заголовка с текстом "Таблица 10х10"
    document.write("<table border='1' width='500px' height='500px'>") //открываем таблицу
    for (var i = 0; i < 10; i++) //циклом перебираем десять строк таблицы
    {
        document.write ('<tr>'); //открываем строку
        for (var j = 0; j < 10; j++) //циклом перебираем десять ячеек в каждой строке
            {
                //чётные - белый цвет, нечетные - черный цвет
                var t = ((i + j) % 2 != 0) ? document.write ("<td bgcolor='white' align='center'>" 
                    + Math.floor(Math.random() * elem) + "</td>") 
                    : document.write ("<td bgcolor='black' align='center'><font color='white'>" 
                    + Math.floor(Math.random() * elem) + "</td>");  
            }
        document.write('</tr>');  //закрываем строку
    }
    document.write('</table>'); //закрываем таблицу
    document.write('<a href="/olehso/LAB3-IT-tech-/main/Lab3.html/">' + '<button style="font-size:24px">Вернуться на главную</button>' + '</a>');
}
