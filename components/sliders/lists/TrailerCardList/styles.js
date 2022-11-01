import tw, { styled } from 'twin.macro';

export const StyledContainer = styled.div`
  ${tw`mt-[-40px]`}
  .slick-custom {
    ${tw`w-full m-0`}
    .slick-list {
      ${tw`h-[280px] pt-12 xl:(pt-24) mt-[-40px] xl:(mt-[-80px] h-[360px]) `}
    }
  }
`;

export const Header = styled.div`
  ${tw`flex flex-row justify-between mb-12 px-8  `}

  .section-title {
    ${tw`flex flex-col gap-4 max-w-[60%]`}

    .subtitle {
      font-family: 'Amatic';
      ${tw`text-blue-700 text-3xl md:(text-4xl) lg:(text-5xl) font-bold`};
    }
    .title {
      ${tw`text-xl sm:(text-2xl) lg:(text-3xl) xl:(text-4xl) font-bold`}
    }
  }

  .show-all-button {
    ${tw`text-base lg:(text-xl) font-semibold text-white border-b-2 h-10 transition-all ease-in-out duration-300 drop-shadow-2xl`}
    z-index: 20;

    &:hover {
      ${tw`text-gray-400 border-gray-400`}
    }
  }
`;

export const StyledBackButton = styled.div`
  ${tw`absolute top-[42.5%] left-0 z-10 flex items-center justify-center cursor-pointer`}

  .back-icon {
    ${tw`w-16 bg-black bg-opacity-90 text-white rounded-full p-4 border-2 border-gray-900 transition-all ease-in-out duration-300`}
    &:hover {
      ${tw`border-white`}
    }
  }
`;

export const StyledNextButton = styled.div`
  ${tw`absolute top-[42.5%] right-0 z-10 flex items-center justify-center cursor-pointer`}

  .next-icon {
    ${tw`w-16 bg-black bg-opacity-90 text-white rounded-full p-4 border border-gray-900 transition-all ease-in-out duration-300`}
    &:hover {
      ${tw`border-white`}
    }
  }
`;
