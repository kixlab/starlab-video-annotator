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

# Object detection 관련 논문

1. [VinVL: Revisiting Visual Representations in Vision-Language Models](https://arxiv.org/abs/2101.00529)
    - 기존의 Bottom-up top-down attention model을 사용한 object detection과 달리, object-centric representation 사용해 큰 데이터셋 이용한 pre-training 방식
    - 매우 큰 object detection 모델 사용
2. [Oscar: Object-Semantics Aligned Pre-training for Vision-Language Tasks](https://arxiv.org/pdf/2004.06165.pdf)
    - Object tag을 이용한 image-text pair pre-train 방식
    - Object tag을 text와 image간의 anchoring point로 사용해 pre-training objective 설정
        
        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/277f0986-ab41-4333-8dc9-011ec1ad78fe/Untitled.png)
        
    - Transformer 이용해 pre-training (일종의 vision-language fusion 모델)
        
        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d258a54b-7a1f-4f86-abd4-d0bca0010d24/Untitled.png)
