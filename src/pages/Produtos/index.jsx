import estilo from './styles.module.scss'
import Filtrar from '../../components/MenuFiltrar'
import Produtos from '../../components/ProdutoCard'
import Ordenar from '../../components/MenuOrdenar'
import { useEffect } from 'react'
export default function ProdutoHome() {

    useEffect(()=>{
        console.log(1)
        fetch('https://projeto-backend-te6l.onrender.com/produtos').then(res=>res.json()).then(data => console.log(data))
    }, [])
    return (
        <div className={estilo.teste}>
            <div className={estilo.container}>
                <div className={estilo.Ordenar}>
                    <Ordenar />
                </div>
                <div className={estilo.containerProdutos}>
                    <div className={estilo.menuFiltrar}>
                        <Filtrar />
                    </div>
                    <div className={estilo.produtos}>
                        1
                        <Produtos />
                        2
                        <Produtos />
                        3
                        <Produtos />
                        <Produtos />
                        <Produtos />
                        <Produtos />
                        <Produtos />
                        <Produtos />
                        <Produtos />
                        <Produtos />
                        <Produtos />
                        <Produtos />
                        <Produtos />
                        <Produtos />
                        <Produtos />
                    </div>

                </div>
            </div>
        </div>
    )
}