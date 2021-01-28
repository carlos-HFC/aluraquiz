import styled from "styled-components";

export const Alternative = styled.form`
  label {
    &[data-selected='true'] {
      background-color: ${({ theme }) => theme.colors.primary}!important;

      &[data-status='SUCCESS'] {
        background-color: ${({ theme }) => theme.colors.success}!important;
      }

      &[data-status='ERROR'] {
        background-color: ${({ theme }) => theme.colors.wrong}!important;
      }
    }

    &:focus {
      opacity: 1;
    }
  }

  button {
    margin-top: 24px;
  }
`