import styled from "styled-components";

export const CalendarContent = styled.div`
  margin-bottom: 12px;
`;

export const CalendarDaysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`;

export const CalendarCells = styled.div`
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 660px) {
    width: 344px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export const CalendarDayName = styled.div`
  color: #94a6be;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
  @media screen and (max-width: 660px) {
    font-size: 14px;
  }
`;

export const OtherMonth = styled.div`
  opacity: 0;
`;

export const CellDay = styled.div`
  :hover {
    color: #94a6be;
    background-color: #eaeef6;
  }
`;
