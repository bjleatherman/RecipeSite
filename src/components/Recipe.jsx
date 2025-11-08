import PropTypes from 'prop-types'
import { User } from './User.jsx'

export function Recipe({ title, ingredientAmounts = [], instructions, author }) {
  return (
    <article>
      <h3>{title}</h3>

      {/* Ingredients list */}
      {ingredientAmounts.length > 0 && (
        <section>
          <h4>Ingredients</h4>
          <ul>
            {ingredientAmounts.map((ia, idx) => (
              <li key={idx}>
                {ia.ingredient} | {ia.amountQuantity} {ia.amountUnit}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Instructions */}
      {instructions && (
        <section>
          <h4>Instructions</h4>
          <p>{instructions}</p>
        </section>
      )}

      {/* Author attribution */}
      {author && (
        <em>
          <br />
          Recipe by <User id={author} />
        </em>
      )}
    </article>
  )
}

Recipe.propTypes = {
  title: PropTypes.string.isRequired,
  ingredientAmounts: PropTypes.arrayOf(
    PropTypes.shape({
      ingredient: PropTypes.string.isRequired,
      amountQuantity: PropTypes.number.isRequired,
      amountUnit: PropTypes.string.isRequired,
    })
  ),
  instructions: PropTypes.string,
  author: PropTypes.string,
}
