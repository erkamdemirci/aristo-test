import tw, { styled, css } from 'twin.macro';

export const StyledContainer = styled.div`
  ${tw`relative h-[350px] md:(h-[375px]) rounded-xl overflow-hidden mx-3 cursor-pointer`}

  .background {
    ${tw`absolute left-0 right-0 top-0 bottom-0 z-[-1]`}

    img {
      ${tw`transition-all duration-300`}
      object-fit: cover;
    }
  }

  &:hover {
    filter: drop-shadow(0px 0px 12.5px rgba(250, 47, 181, 0.75));

    img {
      ${tw`scale-110`}
    }
  }

  .number {
    ${tw`font-bold absolute right-[-15px] top-0 w-min transition-all ease-in-out duration-300 z-10`}
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.55);
    font-size: 10rem;
    line-height: 50%;
  }

  &:hover {
    .number {
      ${tw`right-2 top-8`}
      font-size:150px;
    }
  }

  .title {
    ${tw`absolute bottom-0 left-0 right-0 p-4 pt-24 text-2xl font-bold pointer-events-none transition-all ease-in-out duration-300`}
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.1) 25%,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(0, 0, 0, 0.6) 75%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }

  &:hover {
    .title {
      ${tw`pt-[100%]`}
    }
  }
`;
