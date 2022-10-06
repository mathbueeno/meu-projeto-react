// item é um argumento - ({itens})
// index é o indice do elemento, é utilizado para colocar o atributo key.
// operador ternário do React - ? :
// recebe itens de propriedade
// Fragment = <> </>
function OutraLista({ itens }) {
    return (
        <>
            <h3>Lista de Coisas Boas:</h3>
            {itens.length > 0 ? (
                itens.map((item, index) => <p key={index}>{item}</p>)
            ) : (
                <p>Não há itens na lista!</p>
            )}
        </>
    )
}




export default OutraLista