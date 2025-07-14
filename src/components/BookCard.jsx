import React from "react";


const BookCard = ({book}) => {
    const {title, author_name, first_publish_year,cover_i} = book;
    const imgUrl = cover_i ? `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg` : "https://avatars.mds.yandex.net/i?id=6804ab44ee127010662098f6459b09b23dbfbfdb-3798236-images-thumbs&n=13"
    
    return (
        <div className = "book-card">
            <img src={imgUrl} alt="title" />
            <h3>{title}</h3>
            <p><strong>Автор:</strong> {author_name?.join(',') || 'Неизвестно'}</p>
            <p><strong>Год:</strong> {first_publish_year || "Неизвестен"}</p>
        </div>
    )
}

export default BookCard;