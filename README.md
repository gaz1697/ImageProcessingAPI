# Image Processing API

## Overview

This API provides functionality to process images by resizing them based on the given parameters.

## Available Endpoints

### 1. Main Application Page

**`GET /`**

- **Returns**: The main application page.
- **Purpose**: Serves as the home page for the application.

### 2. Image Processing

**`GET /api/images`**

- **Purpose**: Processes an image by resizing it based on the provided width and height parameters.

#### Query Parameters:

- **`filename`** (required):

  - **Type**: `string`
  - **Description**: Name of the image file located inside the `images` folder.
  - **Example**: `"sample.jpg"`

- **`width`** (required):

  - **Type**: `number`
  - **Description**: Desired width of the processed image in pixels.
  - **Example**: `300`

- **`height`** (required):
  - **Type**: `number`
  - **Description**: Desired height of the processed image in pixels.
  - **Example**: `200`

#### Response:

- **On success**: The processed image will be returned.
- **On failure**: An error message will be returned if the file is not found or if

## Sample URL:

```http
GET /api/images?filename=sample.jpg&width=300&height=200
```
