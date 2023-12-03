import styled from "styled-components";

export const Button = styled.button`
  margin-top: 5px;
  text-decoration: none;
  max-width: auto;
  background-color: #ffde7f;
  font-size: 18px;
  font-weight: 700;
  color: #000000;
  padding: 1.4rem 2.4rem;
  border: none;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;

  &:hover,
  &:active {
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: scale(0.96);
  }

  a {
    text-decoration: none;
    color: #000000;
    font-size: 18px;
    font-weight: 700;
  }
`;
