import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'
import logo from '../../images/logo.png';
import W1 from '../../images/W1.png'; import W2 from '../../images/W2.png'; import W3 from '../../images/W3.png'; import W4 from '../../images/W4.png'; import W5 from '../../images/W5.png'; import W6 from '../../images/W6.png'; import W7 from '../../images/W7.png'; import W8 from '../../images/W8.png'; 

export const Home = () => {

    function formataValor(valor) {
        valor = parseFloat(valor);
        return valor.toLocaleString('pt-br',{style:'currency', currency:'BRL'});
    }

    const [produtos,getProdutos] = useState([]);

    useEffect ( () => {
        axios.get('http://react.professorburnes.com.br/')
        .then((response) => {
            //console.log(response.data);
            getProdutos(response.data);
        })
    },[])

    return(
        <>


    <div class="container-galeria">        
        <div class="item-galeria w-2 h-1">
            <img src={W1} class="img-galeria"></img>
        </div>

        <div class="item-galeria w-1 h-2">
        <img src={W7} class="img-galeria"></img>
        </div>

        <div class="item-galeria w-1 h-2">
        <img src={W8} class="img-galeria"></img>
        </div>

        <div class="item-galeria w-2 h-1">
            <img src={W2} class="img-galeria"></img>
        </div>

        <div class="item-galeria w-1 h-2">
            <img src={W3} class="img-galeria"></img>
        </div>

        <div class="item-galeria w-1 h-2">
            <img src={W4} class="img-galeria"></img>
        </div>

        <div class="item-galeria w-2 h-1">
        <img src={W6} class="img-galeria"></img>
        </div>

        <div class="item-galeria w-2 h-1">
            <img src={W5} class="img-galeria"></img>
        </div>
    </div>
  
   
            <h1 className="text-center">Produtos em Destaque</h1>
            <div className="row">
                { produtos.map((item,index) => (
                    <div className="col-12 col-md-3 text-center">
                        <div className="card">
                            <img src={item.imagemp} className="w-100"
                            alt={item.produto}></img>
                            <h5>{item.produto}</h5>
                            {item.promo != 0 ? 
                                <div>
                                    De: <span className="cortado">{formataValor(item.valor)}</span>
                                    <br/>
                                    <p className="valor">
                                    Por: {formataValor(item.promo)}
                                    </p>
                                </div>
                            :
                                <p className="valor">
                                    {formataValor(item.valor)}
                                </p>
                            }
                            <Link to={'/produto/'+item.id}className="btn">
                                Detalhes

                            </Link >


                        </div>
                    </div>
                ))
                }
            </div>
            
        </>
    )
}