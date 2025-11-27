/**
 * @file OpenAI's Harmony Response Format (gptoss)
 * @author Wes Higbee
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "harmony",

  rules: {
    source_file: ($) => seq($.start, $.end),
    start: ($) => "<|start|>",
    end: ($) => "<|end|>",
  },
});
