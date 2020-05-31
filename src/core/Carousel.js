import React from 'react';
import styled from 'styled-components';

export const CarouselImage = styled.img``;

const getId = (index) => `carousel-${index}`;

const Wrapper = styled.div`
  input[type='radio'] {
    display: none;
  }

  .main-image,.next,.prev {
    display: none;
		user-select: none; 
  }

	.next,.prev {
		cursor: pointer;
  }

  ${({ range }) => range.map((id) => `#${id}:checked~table .main-image.${id}{display: block}`)}

  ${({ range }) =>
    range.map((id, index) => `#${id}:checked~table .next.${getId((index + 1) % range.length)}{display: block}`)}

		${({ range }) =>
      range.map(
        (id, index) => `#${id}:checked~table .prev.${getId((index - 1 + range.length) % range.length)}{display: block}`,
      )}
`;

const Carousel = ({ children }) => {
  const range = [...Array(React.Children.count(children))].map((_, index) => getId(index));

  return (
    <Wrapper range={range}>
      {range.map((id, index) => (
        <input key={id} type="radio" name="carousel" id={id} checked={index === 0} />
      ))}

      <table>
        <tr>
          <td>
            {range.map((id) => (
              // eslint-disable-next-line jsx-a11y/label-has-associated-control
              <label key={id} htmlFor={id} className={`prev ${id}`}>
                Prev
              </label>
            ))}
          </td>

          <td>
            {React.Children.map(children, (child, index) => (
              <div className={`main-image ${getId(index)}`}>{child}</div>
            ))}
          </td>

          <td>
            {range.map((id) => (
              // eslint-disable-next-line jsx-a11y/label-has-associated-control
              <label key={id} htmlFor={id} className={`next ${id}`}>
                Next
              </label>
            ))}
          </td>
        </tr>
      </table>
    </Wrapper>
  );
};

export default Carousel;
