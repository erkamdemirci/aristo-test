import tw, { styled } from 'twin.macro';

export const StyledContainer = styled.div`
  ${tw`container mx-auto px-4`}

  .accordion {
    ${tw`mb-4 rounded-lg max-w-[800px] mx-auto bg-gradient-to-r p-[3px] from-[#536285] to-[#329d5a] transition-all duration-300`}
    .accordion-item {
      ${tw`bg-[#141424] bg-opacity-90 rounded-lg transition-all duration-300`}

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
      ${tw`flex justify-between opacity-90 font-semibold cursor-pointer p-4 pb-2 text-lg md:(p-5 text-xl) lg:(text-2xl)`}
    }

    .accordion-content {
      ${tw`text-lg md:(p-6 text-xl) p-4 md:(p-5) border-t border-[rgba(255,255,255,.15)]`}
    }
  }
`;

export const Header = styled.div`
  ${tw`w-full text-center font-bold mb-12 px-4`}
  .title {
    ${tw`text-3xl md:(text-5xl)`}
  }
`;
