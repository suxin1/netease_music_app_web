import styled from "styled-components";
const CELL_PADDING = ``;
export const Table = styled.table`
  width: 100%;
  table-layout: auto;
  border-collapse: collapse;
  
  border: 1px solid grey;
  border-spacing: 2px;
`;

export const TBody = styled.tbody`
`;

export const Tr = styled.tr`
  display: table-row;
  width: 100%;
`;

export const TitleCell = styled.th`
  background: #aaaaaa;
  padding: 16px 24px;
  
  color: rgba(0,0,0,.85);
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5715;
  text-align: start;
  
  overflow-wrap: break-word;
`;

export const ValueCell = styled(TitleCell)`
  background: white;
  flex: 1;
`;
