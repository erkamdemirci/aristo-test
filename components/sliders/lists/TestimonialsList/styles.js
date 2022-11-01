import tw, { styled } from 'twin.macro';

export const StyledContainer = styled.div`
  ${tw`my-12 container mx-auto relative`}
  .slick-custom {
    ${tw`lg:(mx-24)`}
    .slick-list {
      ${tw`py-12`}
    }
  }
`;

export const Header = styled.div`
  ${tw`mx-12 lg:(mx-24) xl:(absolute top-32 left-24)`}

  .title {
    ${tw`text-3xl md:(text-4xl) lg:(text-5xl) font-bold relative`}

    &::before {
      content: '';
      ${tw`h-full w-2 bg-purple-500 rounded-xl absolute left-[-30px] bottom-0 top-0`}
    }
  }
`;

export const StyledBackButton = styled.div`
  ${tw`absolute top-[42.5%] left-4 lg:(left-[-60px]) z-10 flex items-center justify-center cursor-pointer`}

  .back-icon {
    ${tw`w-20 p-6 lg:(w-24 p-7) bg-black bg-opacity-80 text-white rounded-full border-2 border-gray-900 transition-all ease-in-out duration-300`}
    &:hover {
      ${tw`border-white`}
    }
  }
`;

export const StyledNextButton = styled.div`
  ${tw`absolute top-[42.5%] right-4 lg:(right-[-60px]) z-10 flex items-center justify-center cursor-pointer`}

  .next-icon {
    ${tw`w-20 p-6 lg:(w-24 p-7) bg-black bg-opacity-80 text-white rounded-full border-2 border-gray-900 transition-all ease-in-out duration-300`}
    &:hover {
      ${tw`border-white`}
    }
`;
