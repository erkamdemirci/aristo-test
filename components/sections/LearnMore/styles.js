import tw, { styled } from 'twin.macro';

export const StyledContainer = styled.div`
  ${tw`container mx-auto flex flex-col-reverse lg:(flex-row) gap-4 my-12 items-center px-8`}

  .left {
    ${tw`flex flex-col gap-6 pr-8 w-full lg:(w-[40%]) 2xl:(w-[50%])`}
    .title {
      ${tw`text-5xl font-bold`}
    }
    .desc {
      ${tw`text-lg`}
    }
    .actions {
      ${tw`flex gap-4`}
      button {
        ${tw`px-6 py-3 rounded-lg font-semibold text-xl`}

        &:hover {
          ${tw`underline`}
        }
      }

      .with-bg {
        ${tw`bg-blue-600 border-b-8 border-blue-900 transition-all ease-in-out duration-300`}

        &:hover {
          ${tw`bg-blue-700 mt-2 border-b-0 no-underline`}
        }
      }
    }
  }

  .right {
    ${tw`flex flex-col gap-6 w-full lg:(w-[60%]) 2xl:(w-[50%])`}
    .image {
      ${tw`w-full h-[200px] mb-4 lg:(h-[400px] mb-0) relative rounded-3xl overflow-hidden shadow-xl`}
      img {
        ${tw`w-full h-full`}
        object-fit: cover;
      }
    }
  }
`;
