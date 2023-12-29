import { UseSpringProps, animated, useSpring } from "@react-spring/web";
import { ReactNode } from "react";
import useMeasure from "react-use-measure";

type Props = {
  show: boolean;
  children: ReactNode;
  springProps?: UseSpringProps;
};

const defaultSpringProps: UseSpringProps = {
  config: {
    duration: 200,
  },
};

export default function DynamicHeight({
  show,
  children,
  springProps = defaultSpringProps,
}: Props) {
  const [childrenContainerRef, { height }] = useMeasure();
  const spring = useSpring({
    height: show ? height : 0,
    opacity: show ? 1 : 0,
    ...springProps,
  });

  return (
    <animated.div className="overflow-hidden" style={spring}>
      <div ref={childrenContainerRef}>{children}</div>
    </animated.div>
  );
}
