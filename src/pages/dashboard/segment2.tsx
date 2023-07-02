import React from "react";
import DashBox from "@/components/utils/dashBox";

type Props = NonNullable<unknown>;

const Segment2 = (props: Props) => {
  return (
    <>
      <DashBox gridArea="d" />
      <DashBox gridArea="e" />
      <DashBox gridArea="f" />
    </>
  );
};

export default Segment2;
