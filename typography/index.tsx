import React, { ForwardRefRenderFunction, memo, useMemo } from "react";

type BoxProps = React.AllHTMLAttributes<
  HTMLParagraphElement & HTMLAnchorElement
> & {
  // eslint-disable-next-line react/require-default-props
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline";
  // eslint-disable-next-line react/require-default-props
  link?: boolean;
};

const Typography: ForwardRefRenderFunction<
  HTMLParagraphElement & HTMLAnchorElement,
  BoxProps
> = ({ className = "", link, variant, children, ...rest }, ref) => {
  const classSubtitle1 = useMemo(
    () => `text-base mb-[0.35em] font-normal font-body ${className}`,
    [className]
  );
  const classSubtitle2 = useMemo(
    () => `text-sm mb-[0.35em] font-normal font-body ${className}`,
    [className]
  );
  const classBody1 = useMemo(
    () => `text-base mb-[0.35em] font-normal font-body ${className}`,
    [className]
  );
  const classBody2 = useMemo(
    () => `text-sm mb-[0.35em] font-normal font-body ${className}`,
    [className]
  );
  const classCaption = useMemo(
    () => `text-xs mb-[0.35em] font-body ${className}`,
    [className]
  );
  const classButton = useMemo(
    () => `text-base mb-[0.35em] font-medium uppercase font-body ${className}`,
    [className]
  );
  const classOverline = useMemo(
    () => `text-base mb-[0.35em] font-normal uppercase  font-body ${className}`,
    [className]
  );

  const classH1 = useMemo(
    () => `text-8xl mb-[0.35em] font-display ${className}`,
    [className]
  );
  const classH2 = useMemo(
    () => `text-6xl mb-[0.35em] font-display ${className}`,
    [className]
  );
  const classH3 = useMemo(
    () => `text-5xl mb-[0.35em] font-display ${className}`,
    [className]
  );
  const classH4 = useMemo(
    () => `text-4xl mb-[0.35em] font-display ${className}`,
    [className]
  );
  const classH5 = useMemo(
    () => `text-2xl mb-[0.35em] font-display ${className}`,
    [className]
  );
  const classH6 = useMemo(
    () => `text-xl mb-[0.35em] font-display ${className}`,
    [className]
  );

  const Classes = useMemo(() => {
    return {
      h1: classH1,
      h2: classH2,
      h3: classH3,
      h4: classH4,
      h5: classH5,
      h6: classH6,
      subtitle1: classSubtitle1,
      subtitle2: classSubtitle2,
      body1: classBody1,
      body2: classBody2,
      caption: classCaption,
      button: classButton,
      overline: classOverline,
    };
  }, [
    classBody1,
    classBody2,
    classButton,
    classCaption,
    classH1,
    classH2,
    classH3,
    classH4,
    classH5,
    classH6,
    classOverline,
    classSubtitle1,
    classSubtitle2,
  ]);

  if (variant?.startsWith("h")) {
    const Comp = link
      ? "a"
      : (variant as "h1" | "h2" | "h3" | "h4" | "h5" | "h6");
    return (
      <Comp ref={ref} className={Classes[variant] || undefined} {...rest}>
        {children}
      </Comp>
    );
  }
  if (link) {
    return (
      <a
        ref={ref}
        className={Classes[variant || "body1"] || undefined}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <p ref={ref} className={Classes[variant || "body1"] || undefined}>
      {children}
    </p>
  );
};

export default memo(React.forwardRef(Typography));
