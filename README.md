# JupyterLab_FileSharing

[![Github Actions Status](https://github.com/beegle98/JupyterLab-FileSharing/workflows/Build/badge.svg)](https://github.com/beegle98/JupyterLab-FileSharing/actions/workflows/build.yml)[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/beegle98/JupyterLab-FileSharing/main?urlpath=lab)

jupyterlab fileSharing extension

## 개요

2021-2 자기주도 프로젝트로 JupyterLab-Extesion 개발을 진행하였습니다.

이번 프로젝트에서 FileSharing 확장기능을 구현하였는데 꼭 기능에 초점을 맞춘 것이 아니라 주피터 랩과 거기에 추가된 익스텐션을 많은 분들에게 소개해주면 좋겠다는 목표를 가지고 진행했습니다.

주피터랩은 기본 주피터노트북에서 확장기능으로 Extension이라는 기능을 사용할 수가 있는데 Git, google drive, 변수 인스펙터, 자동완성 등 편의성 기능부터 다양한 기능들을 사용할 수 있습니다. 또 원하는 기능을 직접 개발해서 사용할 수가 있는데 이 프로젝트를 통해 직접 확장기능을 개발해봄으로써 그 방법을 소개하고 이런 식으로 개발할 수 있구나 라는 점을 알리고 싶었습니다. 그래서 JupyterLab Extension 개발을 하고자 하는 분들에게 도움이 되었으면 좋겠다는 생각으로 이번 프로젝트를 진행하게 되었습니다.

## JupyterLab_FileSharing 소개

Jupyter Lab을 사용해 온라인 실습하는 사람들을 위한 Jupyter Lab Extension을 개발하였습니다. 학생과 교수 사이에 파일을 손쉽게 공유할 수 있게하여 온라인으로 실습을 하더라도 원할때마다 파일을 공유하여 진행이 막히지 않고 원할하게 진행되도록 돕는 확장기능입니다. 코드를 작성하다가 파일을 공유하고 싶으면 해당 파일을 우클릭 후 'Share File' 버튼을 클릭해 손쉽게 파일을 공유할 수 있습니다.

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
1. 공식 사이트 참고하기
    
    https://jupyterlab.readthedocs.io/en/stable/extension/extension_tutorial.html : JupyterLab Extension 공식 튜토리얼

    확장기능 개발을 시작하고 싶으신 분은 위 사이트로 가셔서 튜토리얼을 해보시면 도움이 될겁니다.
    Conda 가상환경 설치부터 cookiecutter로 프로젝트 시작하기, 간단한 이미지 출력까지 해보실 수 있습니다.
    
    튜토리얼 외에도 추가적인 가이드도 나와있고 jupyterLab 라이브러리 문서도 있습니다.
    

2. https://github.com/jupyterlab/extension-examples : JupyterLab Extension 공식 GitHub

    JupyterLab Extension 기본 예시들을 구현해놓은 깃헙 주소입니다. 각종 예시들이 알기쉽게 잘 정리되어 있어 참고하기 좋습니다.
    


3. 직접 JupyterLab을 설치해서 각종 Extension들을 찾아보고 GitHub 코드 참고하기
    
    JupyterLab Extension 예시가 아직 많지 않습니다. 한국 내에서는 아예 없다고 봐도 무방하고, StackOverflow, google 등 검색을 많이 해봐도 예시를 찾아보기가 힘들기 때문에 직접 구현된 코드를 보면서 배우는 것이 빠를 수 있습니다.

## JupyterLab_FileSharing Backend GitHub
https://github.com/beegle98/FileSharing_backend

Jupyter 서버를 직접 수정하고 구현할 수는 없기에 파일 전송 작동여부를 테스트하기 위해 백엔드 서버를 직접 구현하였습니다.


이 서버가 주피터랩 서버를 호스팅중인 교수의 서버라고 생각할 수 있습니다. 즉, 교수가 설정해둔 Rest API를 호출하여 교수의 공유폴더로 파일을 전송하게 되는겁니다. 

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
