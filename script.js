let meter = 'Digite um valor em metros! (ex:2.5)'
let choiceUnityOfMeasure = `Agora, selecione uma opção abaixo
para converter, entre:
1 - milímetro (mm)
2 - centímetro (cm)
3 - decímetro (dm)
4 - decâmetro (dam)
5 - hectômetro (hm)
6 - quilômetro (km)`

meter = 10
choiceUnityOfMeasure = 3

switch(choiceUnityOfMeasure){
    case(1):
        console.log(`${meter}m equivale à ${meter *1000}mm`)
    break
    case(2 ):
        console.log(`${meter}m equivale à ${meter *100}cm `)
    break
    case(3):
        console.log(`${meter}m equivale à  ${meter *10}dm `)
    break
    case(4):
        console.log(`${meter}m equivale à ${meter /10}dam`)
    break
    case(5):
        console.log(`${meter}m equivale à ${meter /100}hm`)
    break
    case(6):
        console.log(`${meter}m equivale à ${meter / 1000}km`)
    break
    default:
        console.log('Opção inválida')
}
