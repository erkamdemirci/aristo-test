import tw, { styled } from 'twin.macro';

export const StyledContainer = styled.div`
  ${tw`container mx-auto my-24 px-4`}

  .accordion {
    ${tw`mb-4 rounded-xl max-w-[800px] mx-auto bg-gradient-to-r p-[3px] from-[#536285] to-[#329d5a] transition-all duration-300`}
    .accordion-item {
      ${tw`bg-[#141424] bg-opacity-90 rounded-xl transition-all duration-300`}

      &:hover {
        ${tw`bg-opacity-100`}
        .accordion-title {
          ${tw`opacity-100`}
        }
      }
    }
    .accordion-item.active {
      ${tw`bg-[#0f0f1e]`}

      .accordion-title {
        ${tw`font-bold opacity-100`}
      }
    }

    .accordion-title {
      ${tw`flex justify-between opacity-90 font-semibold text-2xl cursor-pointer p-6`}
    }

    .accordion-content {
      ${tw`text-xl p-6 pt-0`}
    }
  }
`;

export const Header = styled.div`
  ${tw`w-full text-center text-5xl font-bold mb-12`}
`;
