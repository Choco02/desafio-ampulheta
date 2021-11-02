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
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const r1 = readline.createInterface({ input, output });

r1.question('Entre com um número para ser o tamanho da ampulheta: ', resposta => {

    let tamanho = parseInt(resposta);
    if (isNaN(tamanho)) {
        console.log('Numero invalido');
        r1.close();
        return;
    }
    tamanho = tamanho % 2 === 0 ? Math.abs(tamanho) : Math.abs(tamanho + 1);
    const meio = tamanho / 2;

    const linha = Array(tamanho).fill('#').join('');

    let vertical = linha

    const espacos = Array(tamanho).fill(' ').join('');

    const formatador = (str, quantidade, char = ' ') => {
        let data;
        data = `${char.repeat(quantidade)}` +
            `${str.slice(quantidade, str.length - quantidade)}` +
            `${char.repeat(quantidade)}`;

        if (char === '#') {
            const itens = data.split(/ /g);
            const esq = ' '.repeat(quantidade - 1) + itens[0][0];
            const dir = itens[itens.length - 1][0] + ' '.repeat(quantidade - 1);
            data = esq + ' '.repeat(itens.length - 1) + dir;
        }

        return `#${data}#`;
    }


    for (let x = 0; x < meio; x++) {
        let result;
        result = formatador(vertical, x);

        console.log(result);
    }

    for (let x = meio - 1; x > 0; x--) {
        let result;
        result = formatador(espacos, x, '#');

        console.log(result);
    }

    console.log(vertical + '##');

    r1.close();
});