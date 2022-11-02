import tw, { styled } from 'twin.macro';

export const StyledContainer = styled.div`
  ${tw`flex flex-col-reverse px-4 lg:(px-10) py-16 relative min-h-[500px] h-full max-h-[100%]`}

  .content {
    ${tw`relative container mx-auto z-20 flex flex-col w-full gap-4 md:(gap-10) bg-transparent justify-center`}

    .title {
      ${tw`font-bold flex flex-col text-5xl lg:(text-6xl)`}

      span:nth-child(2) {
        ${tw`text-blue-700`}
      }
    }

    .desc {
      ${tw`font-light text-base md:(text-xl max-w-[60%]) lg:(text-2xl) `}
    }

    .action > button {
      ${tw`border-2 w-max py-2 px-3 rounded-lg font-bold text-base md:(text-xl)`}
    }
  }

  .image {
    ${tw`relative min-h-[150px] rounded-xl overflow-hidden md:overflow-visible w-full block mb-6 md:(mb-0 absolute h-auto top-0 right-0 bottom-0 w-full max-w-[50%]) `}

    img {
      object-fit: cover;
    }
  }

  .gradient {
    ${tw`md:(absolute top-0 left-[10%] right-[10%] bottom-0 bg-gradient-to-r from-transparent via-black to-transparent)`}
  }
`;
