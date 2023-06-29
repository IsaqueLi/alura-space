import React from 'react'
import open from './open.png'
import favorito from './favorito.png'

export default function Card({item, style}) {
    return (
        <li className={style.galeria__card}>
            <img
                className={style.galeria__imagem}
                src={item.imagem}
                alt={item.titulo}
            />
            <p className={style.galeria__descricao}>{item.titulo}</p>
            <div>
                <p>{item.creditos}</p>
                <span>
                    <img src={favorito} alt="Ícone coracao de curtir" />
                    <img src={open} alt="Ícone de abrir modal" />
                </span>
            </div>
        </li>
    )
}
