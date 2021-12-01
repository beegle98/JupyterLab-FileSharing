# JupyterLab_FileSharing

[![Github Actions Status](https://github.com/beegle98/JupyterLab-FileSharing/workflows/Build/badge.svg)](https://github.com/beegle98/JupyterLab-FileSharing/actions/workflows/build.yml)[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/beegle98/JupyterLab-FileSharing/main?urlpath=lab)

jupyterlab fileSharing extension

## 개요

2021-2 자기주도 프로젝트로 JupyterLab-Extesion 개발을 진행하였습니다.

## JupyterLab_FileSharing 소개

Jupyter Lab을 사용해 온라인 실습하는 사람들을 위한 Jupyter Lab Extension을 개발하였습니다. 학생과 교수 사이에 파일을 손쉽게 공유할 수 있게하여 온라인으로 실습을 하더라도 원할때마다 파일을 공유하여 진행이 막히지 않고 원할하게 진행되도록 돕는 확장기능입니다. 코드를 작성하다가 파일을 공유하고 싶으면 해당 파일을 우클릭 후 'Share File' 버튼을 클릭해 손쉽게 파일을 공유할 수 있습니다.

기능 외에도 JupyterLab Extension 개발을 하고자 하는 분들에게 도움이 되었으면 좋겠다는 생각으로 이번 프로젝트를 마무리하였습니다.

## 개발 환경 및 라이브러리

- Conda Jupyter Lab 가상환경 설치
- Initialize the project from a __cookiecutter__
- TypeScript
- jupyterlab/application, jupyterlab/filebrowser, jupyterlab/apputils, jupyterlab/ui-components
- Back-End : Express(Node.js), multer, fs, CORS


## 주요 기능
1. 공유하고자 하는 파일 우클릭 후 'Share File'버튼 클릭
2. 공유할 대상의 URL 입력 후 확인
3. 해당 파일 백엔드 서버로 전송


## JupyterLab Extension 시작하기
1. https://jupyterlab.readthedocs.io/en/stable/extension/extension_tutorial.html

    JupyterLab Extension 공식 튜토리얼 링크입니다.

    확장기능 개발을 시작하고 싶으신 분은 위 사이트로 가셔서 튜토리얼을 해보시면 도움이 될겁니다.
    Conda 가상환경 설치부터 프로젝트 시작, 간단한 이미지 출력까지 해보실 수 있습니다.

2. https://github.com/jupyterlab/extension-examples

    JupyterLab Extension 기본 예시들을 구현해놓은 깃헙 주소입니다. 각종 예시들이 잘 정리되어 있어 참고하기 좋습니다.


## JupyterLab_FileSharing Backend GitHub
https://github.com/beegle98/FileSharing_backend


## Requirements

* JupyterLab >= 3.0

## Install

To install the extension, execute:

```bash
pip install JupyterLab_FileSharing
```

## Uninstall

To remove the extension, execute:

```bash
pip uninstall JupyterLab_FileSharing
```


## Contributing

### Development install

Note: You will need NodeJS to build the extension package.

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Change directory to the JupyterLab_FileSharing directory
# Install package in development mode
pip install -e .
# Link your development version of the extension with JupyterLab
jupyter labextension develop . --overwrite
# Rebuild extension Typescript source after making changes
jlpm run build
```

You can watch the source directory and run JupyterLab at the same time in different terminals to watch for changes in the extension's source and automatically rebuild the extension.

```bash
# Watch the source directory in one terminal, automatically rebuilding when needed
jlpm run watch
# Run JupyterLab in another terminal
jupyter lab
```

With the watch command running, every saved change will immediately be built locally and available in your running JupyterLab. Refresh JupyterLab to load the change in your browser (you may need to wait several seconds for the extension to be rebuilt).

By default, the `jlpm run build` command generates the source maps for this extension to make it easier to debug using the browser dev tools. To also generate source maps for the JupyterLab core extensions, you can run the following command:

```bash
jupyter lab build --minimize=False
```

### Development uninstall

```bash
pip uninstall JupyterLab_FileSharing
```

In development mode, you will also need to remove the symlink created by `jupyter labextension develop`
command. To find its location, you can run `jupyter labextension list` to figure out where the `labextensions`
folder is located. Then you can remove the symlink named `JupyterLab_FileSharing` within that folder.

### Packaging the extension

See [RELEASE](RELEASE.md)
