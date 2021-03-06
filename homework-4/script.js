/*
    У вашому місті зростає злочинність. Один із невловимих злодіїв вкрав безцінні реліквії з місцевого музею.
    Працівники СБУ визначили де знаходяться сейфи крадія, однак вони не змогли точно визначити які ПІН-коди вводив злодій.

    Ви детектив, що шукає злодія, та працює над цією справою. Ваша задача підібрати код до сейфів зловмисника, нажаль сейфи підірвати не можна. Ми може зіпсувати всі реліквії!
    СБУ залишили вам примітку зі своїми спостереженнями:
    Ви можете вводити коди безліч разів, сейф не буде замкнено через помилку, це означає що ви можете перелічіти усі можливі коди. ( <---- Зверніть увагу на це)

    Він звернув увагу на ПІН-код 1357, але він також сказав, що можливо, що кожна цифра, яку він бачив,
    насправді може бути іншою суміжною цифрою (по горизонталі або вертикалі, але не по діагоналі).
    Наприклад замість 1 це також може бути 2 або 4. А замість 5 це також може бути 2, 4, 6 або 8.  ( <---- Зверніть увагу на це)


    Циферблат сейфа виглядає так: ( <---- Зверніть увагу на це)
        ┌───┬───┬───┐
        │ 1 │ 2 │ 3 │
        ├───┼───┼───┤
        │ 4 │ 5 │ 6 │
        ├───┼───┼───┤
        │ 7 │ 8 │ 9 │
        └───┼───┼───┘
            │ 0 │
            └───┘

*/


/*
    Чи можете ви допомогти нам знайти всі ці варіації? Було б добре мати функцію, яка повертає масив усіх варіацій
    для спостережуваного ПІН-коду довжиною від 1 до 4 цифр. ( <---- Зверніть увагу на це)

    Можливо назвати функцію getCodes.
    
    observedCode - строка яку побачив шпіон СБУ   ( <---- Зверніть увагу на це)

    function getCodes(observedCode) { 
        // робіть що можете. повертає масив з пін-кодами. пін-коди мають бути строками    ( <---- Зверніть увагу на це)
    }

    Але будь ласка, зверніть увагу, що всі ПІН-коди, як спостережувані, так і результати,
    мають бути СТРОКАМИ через потенційні нулі на початку.  ( <---- Зверніть увагу на це)
    Ми вже підготували для вас кілька тестів. Ми розраховуємо на вас детективе!

    Вам можуть знадобитись методи масива (не обов'язково всі)
    indexOf, push, forEach, findIndex, reduce, concat, map і тд.

    Зверну вашу увагу на такі додаткові структури даних JavaScript , як new Map()  / new Set()
*/


// Тести

// Easy level tests

// Шпіон побачив 8
// Можливі сгенерованані коди
['5', '7', '8', '9', '0']

// Шпіон побачив 11
// Можливі сгенерованані коди
['11', '22', '44', '12', '21', '14', '41', '24', '42']

// Шпіон побачив  007
// Можливі сгенерованані коди
['004', '007', '008', '084', '087', '088', '804', '807', '808', '884', '887', '888']


// Шпіон побачив 369
// Можливі сгенерованані коди
['339','366','399','658','636','258','268','669','668','266','369','398','256','296','259','368','638',
'396','238','356','659','639','666','359','336','299','338','696','269','358','656','698','699','298',
'236','239']

// HARD level tests !!!!!!!!!!!!

// Шпіон побачив 9173
// Можливі сгенерованані коди
['6142', '6143', '6146', '6172', '6173', '6176', '6182', '6183', '6186', '6242', '6243', '6246', '6272',
'6273', '6276', '6282', '6283', '6286', '6442', '6443', '6446', '6472', '6473', '6476', '6482', '6483',
'6486', '8142', '8143', '8146', '8172', '8173', '8176', '8182', '8183', '8186', '8242', '8243', '8246',
'8272', '8273', '8276', '8282', '8283', '8286', '8442', '8443', '8446', '8472', '8473', '8476', '8482',
'8483', '8486', '9142', '9143', '9146', '9172', '9173', '9176', '9182', '9183', '9186', '9242', '9243',
'9246', '9272', '9273', '9276', '9282', '9283', '9286', '9442', '9443', '9446', '9472', '9473', '9476',
'9482', '9483', '9486']

// Шпіон побачив  1357
// Можливі сгенерованані коди
['1224', '1227', '1228', '1244', '1247', '1248', '1254', '1257', '1258', '1264', '1267', '1268', '1284',
'1287', '1288', '1324', '1327', '1328', '1344', '1347', '1348', '1354', '1357', '1358', '1364', '1367',
'1368', '1384', '1387', '1388', '1624', '1627', '1628', '1644', '1647', '1648', '1654', '1657', '1658',
'1664', '1667', '1668', '1684', '1687', '1688', '2224', '2227', '2228', '2244', '2247', '2248', '2254',
'2257', '2258', '2264', '2267', '2268', '2284', '2287', '2288', '2324', '2327', '2328', '2344', '2347',
'2348', '2354', '2357', '2358', '2364', '2367', '2368', '2384', '2387', '2388', '2624', '2627', '2628',
'2644', '2647', '2648', '2654', '2657', '2658', '2664', '2667', '2668', '2684', '2687', '2688', '4224',
'4227', '4228', '4244', '4247', '4248', '4254', '4257', '4258', '4264', '4267', '4268', '4284', '4287',
'4288', '4324', '4327', '4328', '4344', '4347', '4348', '4354', '4357', '4358', '4364', '4367', '4368',
'4384', '4387', '4388', '4624', '4627', '4628', '4644', '4647', '4648', '4654', '4657', '4658', '4664',
'4667', '4668', '4684', '4687', '4688']