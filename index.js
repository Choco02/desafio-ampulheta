`
####################
####################
# ################ #
#  ##############  #
#   ############   #
#    ##########    #
#     ########     #
#      ######      #
#       ####       #
#        ##        #
#        ##        #
#       #  #       #
#      #    #      #
#     #      #     #
#    #        #    #
#   #          #   #
#  #            #  #
# #              # #
##                ##
####################
`

const tamanho = Math.abs(20);
const meio = tamanho / 2;

const linha = Array(tamanho).fill('#').join('');

let vertical = linha

const espacos = Array(tamanho).fill(' ').join('');

const formatador = (str, quantidade) => {
    // console.log(quantidade);
    const char = ' ';
    
    return`${char.repeat(quantidade)}`+ `${str.slice(quantidade, str.length - quantidade)}`;
}
    

for (let x = 0; x < vertical.length; x++) {
    let result;
    result = formatador(vertical, x);
    console.log(result, x);
    // console.log('meio é maior que x: ', meio > x);
}

// console.log('O meio fica em ', tamanho / 2);
