import React from "react";
import DashBox from "@/components/utils/dashBox";
import { useGetKpisQuery } from "@/state/api";

type Props = NonNullable<unknown>;

const Segment1 = (props: Props) => {
  const { data } = useGetKpisQuery();

  return (
    <>
      <DashBox gridArea="a" />
      <DashBox gridArea="b" />
      <DashBox gridArea="c" />
    </>
  );
};

export default Segment1;
