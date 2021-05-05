import React from "react";
import ReactDom from "react-dom";

import "./style.css";
const books = [
	{
		id: 1,
		img:
			"https://images-na.ssl-images-amazon.com/images/I/51+AA8AmMXL._SY255_BO1,204,203,200_.jpg",
		title: "A Song of Ice and Fire",
		author: "George RR Martin",
	},
	{
		id: 2,
		img: "https://m.media-amazon.com/images/I/91iMu22uEWL._AC_UY436_QL65_.jpg",
		title: "Fire and Blood",
		author: "George RR Martin",
	},
	{
		id: 3,
		img:
			"https://images-eu.ssl-images-amazon.com/images/I/51mufWVDbeL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
		title: "A Knight Of The Seven Kingdoms",
		author: "George RR Martin",
	},
];

function BookList() {
	return (
		<section className="booklist">
			{books.map((book) => {
				return <Book key={book.id} book={book}></Book>;
			})}
		</section>
	);
}

const Book = (props) => {
	const { img, title, author } = props.book;
	return (
		<article className="book">
			<img src={img} alt="" />
			<h1>{title}</h1>
			<h4>{author}</h4>
		</article>
	);
};

ReactDom.render(<BookList />, document.getElementById("root"));
