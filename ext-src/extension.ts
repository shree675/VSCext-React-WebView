import * as path from "path";
import * as vscode from "vscode";
import ReactPanel from "./panel";

import {
  WebviewViewProvider,
  WebviewView,
  Webview,
  Uri,
  EventEmitter,
  window,
} from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const jsonObject = [
    {
      name: "abcd",
      type: 6,
    },
    {
      name: "xyz",
      type: 8,
    },
  ];

  const message = JSON.stringify(jsonObject);

  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      "react-webview.webview",
      new ReactPanel(
        context.extensionUri,
        context.extensionPath,
        message,
        vscode.ViewColumn.One
      )
    )
  );
}
