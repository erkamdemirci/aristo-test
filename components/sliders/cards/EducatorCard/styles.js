import tw, { styled, css } from 'twin.macro';

export const StyledContainer = styled.div`
  ${tw`relative h-[375px] my-4 md:(h-[400px]) rounded-xl overflow-hidden mx-3 cursor-pointer`}

  .background {
    ${tw`absolute left-0 right-0 top-0 bottom-0 z-[-1]`}

    img {
      ${tw`transition-all duration-300`}
      object-fit: cover;
    }
  }

  &:hover {
    img {
      ${tw`scale-105`}
    }
  }

  .title {
    ${tw` absolute bottom-0 left-0 right-0 p-4 pt-24 text-4xl font-bold pointer-events-none transition-all ease-in-out duration-300`}
    font-family:'Amatic';
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
