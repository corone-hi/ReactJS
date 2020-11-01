import React from 'react'
import PropTyes from 'prop-types'

//movie는 component가 state(실시간 변경)가 필요하지 않음
//따라서 class component가 될 필요 x ->function component

function Movie({ year, title, summary, poster, genres }) {
	return (
		<div className='movie'>
			<img src={poster} alt={title} title={title} />
			<div className='movie_data'>
				<h3 className='movie_title'>{title}</h3>
				<h5 className='movie_yeaqr'>{year}</h5>
				<p className='movie_summary'>{summary.slice(0, 180)}...</p>
				<ul className='genres'>
					{genres.map((genre, index) => (
						<li key={index} className='genres_genre'>
							{genre}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

Movie.PropTyes = {
	id: PropTyes.number.isRequired,
	year: PropTyes.string.isRequired,
	title: PropTyes.string.isRequired,
	summary: PropTyes.string.isRequired,
	poster: PropTyes.string.isRequired,
	genres: PropTyes.arrayOf(PropTyes.string).isRequired,
}

export default Movie
