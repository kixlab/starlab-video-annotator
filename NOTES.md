# HowTo100 분석

1. [~~https://github.com/vacancy/SceneGraphParser](https://github.com/vacancy/SceneGraphParser) 클론~~
    1. 원본 repo는 코드가 고장나 있어서 [https://drive.google.com/file/d/1rRWcLg8l6gIhRpKxouRM3qcPQd3SdS5o/view?usp=sharing](https://drive.google.com/file/d/1rRWcLg8l6gIhRpKxouRM3qcPQd3SdS5o/view?usp=sharing) 에 코드를 업로드해 두었습니다. 압축을 풀어주세요.
2. 다음과 같이 root에 dataset (caption 데이터) 압축풀기

1. pip install -r requirements.txt
2. [run.py](http://run.py) 실행 
    1. K: graph의 edge thresholding

# VinVL 모델 실행

1. [https://github.com/microsoft/scene_graph_benchmark](https://github.com/microsoft/scene_graph_benchmark) 클론
2. [INSTALL.md](http://install.md) 따라 설치 및 모델 다운로드
3. object-attribute detection 코드 실행 (파일명 변경)
    
    ```bash
    # visualize VinVL object-attribute detection
    # pretrained models at https://penzhanwu2.blob.core.windows.net/sgg/sgg_benchmark/vinvl_model_zoo/vinvl_vg_x152c4.pth
    # the associated labelmap at https://penzhanwu2.blob.core.windows.net/sgg/sgg_benchmark/vinvl_model_zoo/VG-SGG-dicts-vgoi6-clipped.json
    python tools/demo/demo_image.py --config_file sgg_configs/vgattr/vinvl_x152c4.yaml --img_file demo/woman_fish.jpg --save_file output/woman_fish_x152c4.attr.jpg --visualize_attr MODEL.WEIGHT pretrained_model/vinvl_vg_x152c4.pth MODEL.ROI_HEADS.NMS_FILTER 1 MODEL.ROI_HEADS.SCORE_THRESH 0.2 TEST.IGNORE_BOX_REGRESSION False
    ```
