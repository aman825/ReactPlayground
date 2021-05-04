import React from "react";
import ReactDom from "react-dom";

import "./style.css";
const firstBook = {
	img:
		"https://images-na.ssl-images-amazon.com/images/I/51+AA8AmMXL._SY255_BO1,204,203,200_.jpg",
	title: "A Song of Ice and Fire",
	author: "George RR Martin",
};
const secondBook = {
	img:
		"https://m.media-amazon.com/images/I/91iMu22uEWL._AC_UY436_QL65_.jpg",
	title: "Fire and Blood",
	author: "George RR Martin",
}
const thirdBook = {
	img:
		"https://images-eu.ssl-images-amazon.com/images/I/51mufWVDbeL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
	title: "A Knight Of The Seven Kingdoms",
	author: "George RR Martin",
}

function BookList() {
	return (
		<section className="booklist">
			<Book
				img={firstBook.img}
				title={firstBook.title}
				author={firstBook.author}
			/>
			<Book img={secondBook.img}
				title={secondBook.title}
				author={secondBook.author} />
			<Book img={thirdBook.img}
				title={thirdBook.title}
				author={thirdBook.author} />
			<Book />
			<Book />
			<Book />
			<Book />
		</section>
	);
}

const Book = (props) => {
	console.log(props);
	return (
		<article className="book">
			<img src={props.img} alt="" />
			<h1>{props.title}</h1>
			<h4>{props.author}</h4>
		</article>
	);
};

ReactDom.render(<BookList />, document.getElementById("root"));
