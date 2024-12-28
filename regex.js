 let pattern = "shiva"


 let regExOne = new RegExp(pattern)


 let flag = "gi"
 let regExTwo = new RegExp([pattern, flag])

 let regExThree = /shiva/gi

 const strToCheak = "shiva is growing at a rapid speed and recently shiva is worling on shivabuilding material to create skills based shivacreater"

 const result = regExThree.test(strToCheak)
 console.log(result);

 const anotherresult = strToCheak.match(regExThree)
 console.log(anotherresult);

 const oneMoreResult = strToCheak.replace(regExThree, 'p-w')
    console.log(oneMoreResult);

    const webUrl = "https://pwskills.com/shiva%20yadav"

const useableUrl = webUrl.replace(/%\d0/, '_')
    console.log(useableUrl);