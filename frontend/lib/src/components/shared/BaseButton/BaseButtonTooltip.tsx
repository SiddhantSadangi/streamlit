/**
 * Copyright (c) Streamlit Inc. (2018-2022) Snowflake Inc. (2022-2024)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { ReactElement } from "react"

import TooltipIcon from "@streamlit/lib/src/components/shared/TooltipIcon"
import { Placement } from "@streamlit/lib/src/components/shared/Tooltip"
import IsSidebarContext from "@streamlit/lib/src/components/core/IsSidebarContext"

import { StyledTooltipMobile, StyledTooltipNormal } from "./styled-components"

interface Props {
  children: ReactElement
  help?: string
  placement?: Placement
}

export function BaseButtonTooltip({
  children,
  help,
  placement,
}: Props): ReactElement {
  // Set to auto when in sidebar to prevent cutoff tooltips
  const defaultPlacement = React.useContext(IsSidebarContext)
    ? Placement.AUTO
    : Placement.TOP

  if (!help) {
    return children
  }

  return (
    <>
      <StyledTooltipNormal>
        <TooltipIcon content={help} placement={placement || defaultPlacement}>
          {children}
        </TooltipIcon>
      </StyledTooltipNormal>
      <StyledTooltipMobile>{children}</StyledTooltipMobile>
    </>
  )
}
