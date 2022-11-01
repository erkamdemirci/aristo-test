import tw, { styled } from 'twin.macro';

export const StyledContainer = styled.div`
  ${tw`flex flex-col container gap-6 mx-auto w-full py-6 px-4 lg:(flex-row py-12)`}

  .left {
    ${tw`flex-[1] flex justify-center lg:(items-center justify-end)`}

    .title {
      ${tw`flex flex-col gap-1 border-b-[5px] lg:(border-l-[5px] border-b-0) border-purple-500 p-6 rounded-md`}

      span {
        ${tw`font-bold text-3xl lg:(text-5xl)`}
      }

      span:nth-child(2) {
        ${tw`text-5xl lg:(text-7xl)`}
      }
    }
  }

  .right {
    ${tw`flex-[2] flex flex-col gap-3 font-medium`}

    &::before {
      content: '“';
      ${tw`text-8xl h-12`}
    }

    &::after {
      content: '”';
      ${tw`text-8xl h-12 self-end`}
    }

    p {
      ${tw`px-12 text-sm lg:(text-xl)`}
      text-indent: 15px;
    }
  }
`;
