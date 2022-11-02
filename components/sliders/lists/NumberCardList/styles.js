import tw, { styled } from 'twin.macro';

export const StyledContainer = styled.div`
  ${tw`my-12`}
  .slick-custom {
    ${tw`w-full m-0`}
    .slick-list {
      ${tw`py-8`}
    }
  }
`;

export const Header = styled.div`
  ${tw`flex flex-row justify-center mb-4 lg:(justify-between px-12)`}

  .title {
    ${tw`text-3xl md:(text-4xl) lg:(text-5xl) font-bold`}
  }
  .show-all-button {
    ${tw`hidden lg:(block) text-base md:(text-xl) font-semibold text-white border-b-2 h-8 transition-all ease-in-out duration-300`}
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
