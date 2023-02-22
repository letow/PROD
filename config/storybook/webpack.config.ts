import path from "path";
import { BuildPaths } from "./../build/types/config";
import { Configuration, DefinePlugin } from "webpack";
import { buildCssLoaders } from "../build/loaders/buildCssLoaders";
import { buildSvgLoader } from "../build/loaders/buildSvgLoader";

export default ({ config }: { config: Configuration }) => {
  const paths: BuildPaths = {
    entry: "",
    build: "",
    html: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };

  config.resolve?.modules?.push(paths.src);

  config.resolve?.extensions?.push(".ts", ".tsx");

  // @ts-ignore
  config.module?.rules = config.module?.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });

  config.module?.rules?.push(buildSvgLoader());
  config.module?.rules?.push(buildCssLoaders(true));
  config.plugins?.push(
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
    })
  );
  return config;
};
